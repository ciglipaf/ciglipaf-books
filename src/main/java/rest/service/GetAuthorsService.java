package rest.service;
import org.json.JSONArray;
import org.json.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Random;

/**
 * Created by cemalonder on 09/01/2017.
 */
@WebServlet("/getauthors")
public class GetAuthorsService extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // request - response configurations
        req.setCharacterEncoding("UTF-8");

        resp.setContentType("application/json; charset=UTF-8");
        resp.addHeader("Access-Control-Allow-Origin", "*");
        resp.addHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");

        /* objects that will be used for response
            The key is creating a Writer that (internally) generates a byte stream with the desired encoding.
            For this reason set response encoding to UTF-8 before creating writer!!
        */
        PrintWriter out = resp.getWriter();

        // data configuration
        Integer authorSize = 6;

        String[] authorImages = { "http://www.hayalperdesi.net/images/haberler/1168.jpg",
                                  "https://farzimuhaldotcom.files.wordpress.com/2012/01/nfk.jpg",
                                  "http://kitaplikkedisi.com/wp-content/uploads/2014/11/William-Burroughs-014.jpg",
                                  "http://www.fakirelma.com/files/uploads/news/default/orhan-pamuk-yazarlar-af9a1b2321937079ac42.jpg",
                                  "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRp8gM20DyWSr489aVssuXyVrRbYLf5HO8PTaWyD1EZ7iCdFaVD4w",
                                  "http://hepsi10numara.com/wp-content/uploads/2013/02/iyi-yazarlar.jpg"};

        String[] authorNames = {"Cemal", "Emre", "Eren", "Rüveyda", "Zeynep", "Nurefşan", "Ecrin"};

        String[] authorBio = {"Gerçek bir yazar olarak bilinmektedir.",
                              "Yazarlık tarihi pek parlak değildir.",
                              "Yazar mı ne yazarı, ben yazar değilim ki :O",
                              "Onun arabası var!",
                              "Keşke şıp diye düzelsek :(",
                              "Seni çok seviyorum",
                              "Ne olur hiç ayrılmayalım, kanıyorum :("};

        /* create JSONArray for multiple author information. Than for each author
           create a JSONObject. */

        JSONArray authors = new JSONArray();
        for (int i = 0; i < authorSize; i++) {
            JSONObject author = new JSONObject();
            author.put("authorImage", authorImages[new Random().nextInt(authorImages.length)]);
            author.put("authorName", authorNames[new Random().nextInt(authorNames.length)]);
            author.put("authorBio", authorBio[new Random().nextInt(authorBio.length)]);
            authors.put(author);
        }

        out.print(authors);

        if (out != null) try {
            out.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


}
