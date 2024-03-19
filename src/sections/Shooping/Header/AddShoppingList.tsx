import AddButton from 'src/components/buttons/AddButton';
import ShoppingModal from '../Modal/ShoppingModal';
import { useBoolean } from 'src/hooks/use-Boolean';

interface IAddShoppingList {
    refetch: VoidFunction;
}
const AddShoppingList = ({ refetch }: IAddShoppingList) => {
    const modal = useBoolean();

    return (
        <div>
            <AddButton onClick={modal.setTrue} />
            <ShoppingModal
                refetch={refetch}
                isOpen={modal.value}
                onClose={modal.toggle}
            />
        </div>
    );
};

export default AddShoppingList;
