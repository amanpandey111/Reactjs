import './App.css'
import AddToCartButton from './pub-sub-pattern/components/publisher/AddToCartButton';
import CartBadge from './pub-sub-pattern/components/subscriber/CartBadge';
// import MainForm from './state-reducer-pattern/task/component/MainForm';
// import LikeButton from './optmistic-ui-pattern/components/LikeButton'
// import Comments from './optmistic-ui-pattern/task/Comments'
// import FormField from './state-reducer-pattern/component/FormField'
// import Toggle from './state-reducer-pattern/component/Toggle'
// import FormProvider from './state-reducer-pattern/provider/FormProvider'
// import { customToggleReducer } from './state-reducer-pattern/reducer/toggle-reducer'
// import { customFormReducer } from './state-reducer-pattern/reducer/form-reducer'
// import FormWizardProvider from './state-reducer-pattern/task/provider/FormWizardProvider'

function App() {
  return (
    <>
      {/* <LikeButton postId={1} />       */}
      {/* <Comments /> */}

      {/* here We will be doing a reducer pattern  */}
      {/* <Toggle reducer={customToggleReducer} /> */}
      {/* //todo {'State-Reducer Hook provider'} together */}
      {/* <FormProvider reducer={customFormReducer}>
        <FormField />
      </FormProvider> */}

      {/* <FormWizardProvider>
        <MainForm />
      </FormWizardProvider> */}

      {/* //todo : pub sub pattern */}
      <AddToCartButton />
      <CartBadge />
    </>
  )
}

export default App;
