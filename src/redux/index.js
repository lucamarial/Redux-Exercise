import store from "../redux/store/index"
import { addArticle } from "../redux/actions/index"

window.store = store;
window.addArticle = addArticle

store.subscribe(() => console.log('Look ma, Redux!!'))

store.dispatch( addArticle({ title: 'React Redux for Beginners', id: 1 }) );
