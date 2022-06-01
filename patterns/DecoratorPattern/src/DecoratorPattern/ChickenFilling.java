package DecoratorPattern;

public class ChickenFilling extends FillingsDecorator{
    public ChickenFilling(BaseBurger burger) {
        super(burger);
        this.price=40;
        this.description=" ,chicken filling ";
    }
}
