import Button from './Button';

export default {
    title: 'components/Button',
    component: Button,
}

export const Basic = () => <Button content={'헤으응 눈나아'} onClick={() => console.log('눌렸엉')}/>