import Router from 'express';
import { ProductController } from './product.controller';

const productController = new ProductController();
const productRouter = Router();

productRouter.get('/', productController.getAllProducts);
productRouter.get('/:id', productController.getProductByID);
productRouter.get('/products_by_category/:cate_id', productController.getProductByCategory)
productRouter.post('/', productController.createProduct);
productRouter.patch('/', productController.updateProduct);
productRouter.delete('/:id', productController.deleteProduct);

export default productRouter;