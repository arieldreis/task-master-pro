package com.example.wish_list.controle;

import com.example.wish_list.modelo.WishListModel;
import com.example.wish_list.servico.ProdutoServico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
// Cada método tem um um tipo de rota.
@RestController
public class ProdutoControle {

    @Autowired
    private ProdutoServico PS;

    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody WishListModel PM){
        return PS.cadastrar(PM);
    }

    @GetMapping("/listar")
    public Iterable<WishListModel> listar(){
        return  PS.listar();
    }


    @GetMapping("/produtos")
    public String rota(){
        return "Api de produtos funcionando!";
    }
}
