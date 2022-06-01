package builder;

public class Cosmetics implements webGet{

        private Ecom house;

        public Cosmetics()
        {
            this.house = new Ecom();
        }

        public void buildBasement()
        {
            house.setBasement("Wooden Poles");
        }

        public void buildStructure()
        {
            house.setStructure("Wood and Ice");
        }

        public void buildInterior()
        {
            house.setInterior("Fire Wood");
        }

        public void buildRoof()
        {
            house.setRoof("Wood, caribou and seal skins");
        }

        public Ecom getHouse()
        {
            return this.house;
        }
}
