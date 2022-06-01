package AdapterPattern;

public class Person {
    private String bikeNo;
    private String licenseNo;
    private String bankAccount;

    @Override
    public String toString() {
        return "Person{" +
                "bikeNo='" + bikeNo + '\'' +
                ", licenseNo='" + licenseNo + '\'' +
                ", bankAccount='" + bankAccount + '\'' +
                '}';
    }

    public String getBikeNo() {
        return bikeNo;
    }

    public void setBikeNo(String bikeNo) {
        this.bikeNo = bikeNo;
    }

    public String getLicenseNo() {
        return licenseNo;
    }

    public void setLicenseNo(String licenseNo) {
        this.licenseNo = licenseNo;
    }

    public String getBankAccount() {
        return bankAccount;
    }

    public void setBankAccount(String bankAccount) {
        this.bankAccount = bankAccount;
    }
}
