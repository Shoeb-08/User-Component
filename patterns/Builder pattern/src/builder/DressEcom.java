package builder;

public class DressEcom implements webGet{
        private Ecom house;

        public DressEcom()
        {
            this.house = new Ecom();
        }
        public void buildBasement()
        {
            house.setBasement("Ice Bars");
        }
        public void buildStructure()
        {
            house.setStructure("Ice Blocks");
        }
        public void buildInterior()
        {
            house.setInterior("Ice Carvings");
        }
        public void buildRoof()
        {
            house.setRoof("Ice Dome");
        }
        public Ecom getHouse()
        {
            return this.house;
        }
}
