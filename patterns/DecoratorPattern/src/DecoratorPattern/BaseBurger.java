package DecoratorPattern;

public abstract class BaseBurger {
    protected double price;
    protected String description;

    public double getPrice() {
        return this.price;
    }

    public String getDescription() {
        return this.description;
    }
}
