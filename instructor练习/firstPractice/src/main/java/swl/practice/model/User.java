package swl.practice.model;

public class User {
    private Integer userId;

    private String userName;

    private String userLoginname;

    private String userPasswrd;

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName == null ? null : userName.trim();
    }

    public String getUserLoginname() {
        return userLoginname;
    }

    public void setUserLoginname(String userLoginname) {
        this.userLoginname = userLoginname == null ? null : userLoginname.trim();
    }

    public String getUserPasswrd() {
        return userPasswrd;
    }

    public void setUserPasswrd(String userPasswrd) {
        this.userPasswrd = userPasswrd == null ? null : userPasswrd.trim();
    }
}