package com.example.wish_list.repositorio;

import com.example.wish_list.modelo.WishListModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutoRepositorio extends CrudRepository<WishListModel, Long> {
}
