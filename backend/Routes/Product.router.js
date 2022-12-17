const { Router } = require('express');

const productController = Router();
const { Product } = require('../Models/Product.model');
// const p = require('../product/Pro.json');

productController.get('/', async (req, res) => {
  try {
    const { filter, page, limit = 20, orderBy = 'id', order = 'asc' } = req.query;
    const skip = (page - 1) * limit;

    const search = filter
      ? {
          $or: [{ brand: { $regex: filter, $options: 'i' } }],
        }
      : {};

    let result = await Product.find(search)
      .populate('brand')
      .skip(skip)
      .limit(limit)
      .sort({ [orderBy]: order === 'asc' ? 1 : -1 });

    res.send(result);
  } catch (e) {
    console.log(e);
  }
});

// ---------------------- advance api search ---------------------------

// productController.get('/', async (req, res) => {
//   try {
//     const page = parseInt(req.query.page) - 1 || 0;
//     const limit = parseInt(req.query.limit) || 5;
//     const search = req.query.search || '';
//     let sort = req.query.sort || 'rating';
//     let brand = req.query.brand || 'All';

//     const brandOptions = ['roadstar', 'nike'];

//     brand === 'All'
//       ? (brand = [...brandOptions])
//       : (brand = req.query.brand.split(','));
//     req.query.sort ? (sort = req.query.sort.split(',')) : (sort = [sort]);

//     let sortBy = {};
//     if (sort[1]) {
//       sortBy[sort[0]] = sort[1];
//     } else {
//       sortBy[sort[0]] = 'asc';
//     }

//     const pro = await Movie.find({ brand: { $regex: search, $options: 'i' } })
//       .where('brand')
//       .in([...brand])
//       .sort(sortBy)
//       .skip(page * limit)
//       .limit(limit);

//     const total = await Movie.countDocuments({
//       brand: { $in: [...brand] },
//       Name: { $regex: search, $options: 'i' },
//     });

//     const response = {
//       error: false,
//       total,
//       page: page + 1,
//       limit,
//       brand: brandOptions,
//       pro,
//     };

//     res.status(200).json(response);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: true, message: 'Internal Server Error' });
//   }
// });

// --------------------------  advance api search ---------------------------

// productController.get('/:id', async (req, res) => {
//   const { id } = req.params;
//   const product = await Product.findOne({ _id: id });
//   res.send(product);
// });

// const insertProduct = async () => {
//   try {
//     const docs = await Product.insertMany(p);
//     return Promise.resolve(docs);
//   } catch (e) {
//     return Promise.reject(err);
//   }
// };

// insertProduct()
//   .then((docs) => console.log(docs))
//   .catch((err) => console.log(err));

module.exports = { productController };
