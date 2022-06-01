package AdapterPattern;

public class DriverAdapter extends swiggyDriver implements Driver{

    private Person person;
    public DriverAdapter(Person person){
        this.person=person;
        this.adaptData();
    }
    private void adaptData(){
        this.setBikeNo(person.getBikeNo());
        this.setLicenseNo(Integer.valueOf((person.getLicenseNo())));
        String [] personBankAccount=person.getBankAccount().split(",");
        BankAccount driverBankAccount= new BankAccount();
        driverBankAccount.setAccountNo(personBankAccount[0]);
        driverBankAccount.setBankName(personBankAccount[1]);
        driverBankAccount.setIFSCNo(personBankAccount[2]);
        driverBankAccount.setCityName(personBankAccount[3]);
        this.setBankAccount(driverBankAccount);
    }

}
