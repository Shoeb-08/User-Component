package builder;
public class main {
public static void main(String[] args) {
    webGet Cosmetics = new DressEcom();
    DevTeam engineer = new DevTeam(Cosmetics);
    engineer.webGet();
    Ecom house = engineer.getHouse();
    System.out.println("Builder constructed: " + house);
}
}
