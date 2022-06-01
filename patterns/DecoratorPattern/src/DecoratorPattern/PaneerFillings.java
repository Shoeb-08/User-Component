package DecoratorPattern;

public class PaneerFillings extends FillingsDecorator{
    public PaneerFillings(BaseBurger burger) {
        super(burger);
        this.price=30;
        this.description=" , Paneer Filling ";
    }
}
