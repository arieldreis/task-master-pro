package com.example.wish_list.servico;

import com.example.wish_list.modelo.RespostaModelo;
import com.example.wish_list.modelo.WishListModel;
import com.example.wish_list.repositorio.ProdutoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

@Service
public class ProdutoServico {
    @Autowired
    private ProdutoRepositorio PR;

    @Autowired
    private RespostaModelo RM;

    // Method para listar todos os produtos
    public Iterable<WishListModel> listar(){
        return PR.findAll();
    }

    // Method para cadastrar produtos
    // Como ele não sabe o retorno o méthod será cadastrar.
    public ResponseEntity<?> cadastrar_alterar(WishListModel PM, String action){
        if(PM.getNome().equals("")){
            RM.setMensagem("O nome do produto é obrigatório");
            return new ResponseEntity<RespostaModelo>(RM, (HttpStatusCode) HttpStatus.BAD_REQUEST); // Send the message to front_end
        } else if (PM.getMarca().equals("")) {
            RM.setMensagem("O nome da marca é obrigatório.");
            return new ResponseEntity<RespostaModelo>(RM, (HttpStatusCode) HttpStatus.BAD_REQUEST); // Send the message to front_end
        } else {
            if(action.equals("cadastrar")){
                return new ResponseEntity<WishListModel>(PR.save(PM), HttpStatus.CREATED);
            } else {
                return new ResponseEntity<WishListModel>(PR.save(PM), HttpStatus.OK);
            }
        }
    }

    // Method to remove products
    public ResponseEntity<RespostaModelo> remover(long codigo){
        if(!PR.existsById(codigo)){
            return new ResponseEntity<RespostaModelo>(RM, HttpStatus.NOT_FOUND);
        }

        PR.deleteById(codigo);
        RM.setMensagem("O produto foi removido com sucesso.");
        return new ResponseEntity<RespostaModelo>(RM, HttpStatus.OK);
    }
}
