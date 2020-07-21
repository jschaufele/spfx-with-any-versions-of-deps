import { IDropdownOption } from 'office-ui-fabric-react/lib/components/Dropdown';

export interface IAsyncListDropdownState {
  loading: boolean;
  options: IDropdownOption[];
  error: string;
}