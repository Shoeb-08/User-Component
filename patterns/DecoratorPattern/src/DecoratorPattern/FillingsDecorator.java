package DecoratorPattern;

public class FillingsDecorator extends BaseBurger{
    protected BaseBurger burger;
    public FillingsDecorator(BaseBurger burger){
        this.burger=burger;
    }
    @Override
    public double getPrice()
    {
        return (this.burger.getPrice() + this.price);
    }

    @Override
    public String getDescription()
    {
        return (this.burger.getDescription() + this.description);
    }
}
