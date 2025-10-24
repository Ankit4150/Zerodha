const {signUp,logIn}=require("../Controllers/AuthController");
const router =require("express").Router();
const {userverification}=require("../Middlewares/AuthMiddleware");

router.post("/signup",signUp);
router.post("/login",logIn);
router.get("/me",userverification);


router.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "none",
    secure: true,
  });
  return res.status(200).json({ message: "Logged out successfully", status: true });
});

module.exports=router;