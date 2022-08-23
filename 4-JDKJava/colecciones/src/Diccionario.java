import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Diccionario {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        Map<String, String> diccionario = new HashMap<String, String>();
        diccionario.put("uno", "one");
        diccionario.put("dos", "two");
        diccionario.put("tres", "three");
        diccionario.put("cuatro", "four");
        diccionario.put("cinco", "five");
        diccionario.put("seis", "six");
        diccionario.put("siete", "seven");
        diccionario.put("ocho", "eight");
        diccionario.put("nueve", "nine");
        diccionario.put("diez", "ten");
        diccionario.put("once", "eleven");
        diccionario.put("doce", "twelve");
        diccionario.put("trece", "thirteen");
        diccionario.put("catorce", "fourteen");
        diccionario.put("quince", "fifteen");
        diccionario.put("dieciseis", "sixteen");
        diccionario.put("diecisiete", "seventeen");
        diccionario.put("dieciocho", "eighteen");
        diccionario.put("diecinueve", "nineteen");
        diccionario.put("veinte", "twenty");

        // Esto realiza la "inversión" del diccionario
        Map<String, String> dictionary = new HashMap<>();
        for (String key : diccionario.keySet()) {
            dictionary.put(diccionario.get(key), key);
        }

        String frase = teclado.next().toLowerCase().trim();
        teclado.close();

        StringBuilder phrase = new StringBuilder();
        // Separamos las palabras por espacio e iteramos sobre cada una de ellas
        for (String palabra : frase.split(" ")) {
            // buscamos en el mapa
            // dependiendo del idioma, buscaríamos en diccionario o dictionary
            String word = diccionario.get(palabra);
            // Si no existe, dejamos en Español
            if (word == null) {
                word = palabra;
            }
            // "concatenamos"
            if (phrase.length() != 0) {
                phrase.append(" ");
            }
            phrase.append(word);
        }
        System.out.println(phrase.toString());






    }
}
