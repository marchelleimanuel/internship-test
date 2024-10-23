package com.api.magang_project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.magang_project.model.Product;
import com.api.magang_project.repository.ProductRepository;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepo;

    public Product addProduct(Product product) {
        return productRepo.save(product);
    }

    public List<Product> getProduct() {
        return productRepo.findAll();
    }

    public Product getProductById(int id) {
        return productRepo.getReferenceById(id);
    }

    public void deleteProduct(int id) {
        productRepo.deleteById(id);
    }

    public Product updateProduct(Product product) {
        Product newProduct = productRepo.getReferenceById(product.getId());
        if(newProduct != null) {
            newProduct = product;
            productRepo.save(newProduct);
            return newProduct;
        }
        return null;
    }
}