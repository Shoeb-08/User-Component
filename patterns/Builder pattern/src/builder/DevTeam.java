package builder;

public class DevTeam {
        private webGet houseBuilder;
        public DevTeam(webGet houseBuilder)
        {
            this.houseBuilder = houseBuilder;
        }
        public Ecom getHouse()
        {
            return this.houseBuilder.getHouse();
        }
        public void constructHouse()
        {
            this.houseBuilder.buildBasement();
            this.houseBuilder.buildStructure();
            this.houseBuilder.buildRoof();
            this.houseBuilder.buildInterior();
        }
}
