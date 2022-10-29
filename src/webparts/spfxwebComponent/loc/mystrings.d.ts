declare interface ISpfxwebComponentWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  AppLocalEnvironmentSharePoint: string;
  AppLocalEnvironmentTeams: string;
  AppSharePointEnvironment: string;
  AppTeamsTabEnvironment: string;
}

declare module 'SpfxwebComponentWebPartStrings' {
  const strings: ISpfxwebComponentWebPartStrings;
  export = strings;
}
