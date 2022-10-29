import { IDateTimeFieldValue } from "@pnp/spfx-property-controls";

export interface ISpfxwebComponentProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  color:string;
  lists: string | string[];
  datetime: IDateTimeFieldValue;
  age :string;
  name:string;
  location:string;
  about:string;
}
