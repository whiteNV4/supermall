import BackTop from "components/content/backTop/BackTop";
import { BACK_DISTANCE } from "common/const";

export const itemListenerMixin = {
    mounted() {
        // const newRefresh = debounce(this.$refs.scroll.refresh, 100);
        this.itemImgListener = () => {
            this.$refs.scroll.refresh()
        }
        this.$bus.$on('itemImageLoad', this.itemImgListener)
    }
}

export const backTopMixin = {
    components: {
        BackTop
    },
    data() {
        return {
            isShowBackTop: false
        }
    },
    methods: {
        backClick() {
            this.$refs.scroll.scrollTo(0, 0);
        },
        listenShowBackTop(position) {
            this.isShowBackTop = -position.y > BACK_DISTANCE
        }
    }

}