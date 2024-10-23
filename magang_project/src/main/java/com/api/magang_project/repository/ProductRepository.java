package com.api.magang_project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.api.magang_project.model.Product;

public interface ProductRepository extends JpaRepository<Product, Integer>{}
