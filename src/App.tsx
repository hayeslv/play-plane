import { defineComponent } from "vue";
import "./style/common.scss";

export default defineComponent({
  setup() {
    return { };
  },
  render() {
    return <router-view />;
  },
});
