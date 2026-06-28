import Text from './components/text';
import Icon from './components/icon';
import TrashIcon from './assets/icons/Trash-Regular.svg?react';
import CheckIcon from './assets/icons/Check-Regular.svg?react';
import PencilIcon from './assets/icons/PencilSimple-Regular.svg?react';
import PlusIcon from './assets/icons/Plus-Regular.svg?react';
import spinnerIcon from './assets/icons/spinner.svg?react';
import XIcon from './assets/icons/x.svg?react';
import Badge from './components/badge';

export default function App() {

  return (
    <div className="grid gap-3">
      <div className="flex flex-col gap-2"> 
        <Text variant="body-sm-bold" className='text-pink-base'>
          Olá Mundo!
        </Text>
        <Text className='text-green-base'>
          Olá Mundo!
        </Text>
          <Text variant="body-md-bold">
          Olá Mundo!
        </Text>
      </div>

      <div className="flex gap-1">
        <Icon svg={TrashIcon} className="fill-pink-base" />
        <Icon svg={CheckIcon} className="fill-green-base" />
        <Icon svg={PlusIcon} className="fill-blue-base" />
        <Icon svg={PencilIcon} className="fill-yellow-base" />
        <Icon svg={spinnerIcon} animate />
        <Icon svg={XIcon} className="fill-gray-base" />
      </div>
      <div>
        <Badge variant={'secondary'}>5</Badge>
        <Badge>2 de 5</Badge>
      </div>
    </div>
  )
}

