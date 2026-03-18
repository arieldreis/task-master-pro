package com.example.wish_list.controle;

import com.example.wish_list.modelo.WishListModel;
import com.example.wish_list.servico.ProdutoServico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

// Cada método tem um um tipo de rota.
@RestController
public class ProdutoControle {

    @Autowired
    private ProdutoServico PS;

    @DeleteMapping("/remover/{codigo}")
    public ResponseEntity<WishListModel> remover(@PathVariable long codigo){
        return PS.remover(codigo);
    }

    @PutMapping("/alterar")
    public ResponseEntity<?> alterar(@RequestBody WishListModel PM){
        return PS.cadastrar_alterar(PM, "alterar");
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody WishListModel PM){
        return PS.cadastrar_alterar(PM, "cadastrar");
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
