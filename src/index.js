import Vue from "vue";
import vueCustomElement from "vue-custom-element";
import TestComponent from "./TestComponent";

Vue.use(vueCustomElement);

const options = {
	shadow: true,
	beforeCreateVueInstance(root){

		const rootNode = root.el.getRootNode();
		
		if(rootNode instanceof ShadowRoot){

			root.shadowRoot = rootNode

		}else{

			root.shadowRoot = document.head;
		}

		return root;

	}
}

Vue.customElement('test-component', TestComponent, options);