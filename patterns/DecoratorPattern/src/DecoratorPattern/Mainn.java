package DecoratorPattern;

public class Mainn {
    public static void main(String[] args) {
        SpecialCheeseBurger burger=new SpecialCheeseBurger();
        printBurgerInfo(burger);
        ChickenFilling withChicken= new ChickenFilling(burger);
        printBurgerInfo(withChicken);
        PaneerFillings withPaneer=new PaneerFillings(withChicken);
        printBurgerInfo(withPaneer);
    }
    private static void printBurgerInfo(BaseBurger burger) {
        System.out.println(burger.getDescription() + " Costs " + burger.getPrice() + " $");
    }
}
