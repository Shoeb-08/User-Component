package AdapterPattern;

public class Register {
    public static void main(String[] args){
        Person employee1= new Person();
        employee1.setBikeNo("ts 8899");
        employee1.setLicenseNo("123456789");
        employee1.setBankAccount("AccountNumber54,SBI,2212,Hyderabad");

        Driver swiggyEmp1 =new DriverAdapter(employee1);
        System.out.println("Bike Number: "+ swiggyEmp1.getBikeNo());
        System.out.println("License Number: "+ swiggyEmp1.getLicenseNo());
        System.out.println("Bank Name: "+ swiggyEmp1.getBankAccount().getBankName());
        System.out.println(swiggyEmp1.getBankAccount());
    }

}
