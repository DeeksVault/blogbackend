const jobapply = require("../controllers/jobapply.controller");
const { verifyuser } = require("../middleware/verifyuser");


router.route("/" , verifyuser , jobapply)



module.exports = router;