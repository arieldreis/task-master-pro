package com.example.wish_list;
import java.util.Arrays;
import java.util.List;
import com.example.wish_list.entities.wishList;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/itens")
public class WishListController {
    @GetMapping
    public List<wishList> getWishList(){
        return Arrays.asList(
                new wishList(1, "Estudar nodeJS"),
                new wishList(2, "Apreder REACT")
        );
    }
}
