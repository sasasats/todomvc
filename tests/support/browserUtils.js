import { t } from "testcafe";

class BrowserUtils {
  async reload() {
    await t.eval(() => location.reload(true));
  }
}

export default new BrowserUtils();