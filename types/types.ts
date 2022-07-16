/* CONSTRUCTION */

type EnergyEfficiencyClasses =
    | "G"
    | "F"
    | "E"
    | "D"
    | "C"
    | "B"
    | "A"
    | "A+"
    | "A++"
    | "A+++"
    | "A++++";

type SingleFamilyAttached =
    | "duplex"
    | "triplex"
    | "quadplex"
    | "townhouse"
    | "terraced house"
    | "rowhouse"
    | "weavers' cottage";

type SingleFamilyDetached =
    | "bungalow"
    | "central passage house"
    | "chattel house"
    | "cottage"
    | "courtyard house"
    | "konak"
    | "log house"
    | "mansion"
    | "housebarn"
    | "split level home"
    | "upper lusatian house"
    | "villa";

type MultiFamily =
    | "brownstone"
    | "bedsit"
    | "condominium"
    | "deck access"
    | "dingbat"
    | "loft"
    | "mother-in-law apartment"
    | "microapartment"
    | "officetel"
    | "one-plus-five"
    | "penthouse"
    | "plattenbau"
    | "railroad apartment"
    | "rooming house"
    | "shophouse"
    | "single room occupancy"
    | "semi-detached"
    | "studio apartment"
    | "tower block"
    | "tyneside flat"
    | "tong lau"
    | "unit"
    | "vatara";

type KindOfHouse = SingleFamilyAttached | SingleFamilyDetached | MultiFamily;

interface EnergyLabel {
    isValid: boolean;
    expiry: number;
    energyEfficiencyClass: EnergyEfficiencyClasses;
}

interface IExternalConstruction {
    buildingEnvelope: null;
    domesticWaterSystem: null; //
    lightFrame: null;
    retainingWalls: null;
    shallowFoundation: null;
}

interface IInternalConstruction {
    ventilation: {
        isExistent: boolean;
    };
    plumbing: {
        isExistent: boolean;
    };
    airConditioning: {
        isExistent: boolean;
    };
    electricalWiring: {
        isExistent: boolean;
    };
    telephoneWiring: {
        isExistent: boolean;
    };
    insulation: {
        isExistent: boolean;
    };
    flooring: {
        isExistent: boolean;
    };
    wall: {
        isExistent: boolean;
        applications: string[];
        composition: string;
        materials: string[];
        properties: string[];
    };
    ceiling: {
        isExistent: boolean;
    };
    door: {
        isExistent: boolean;
        amount: number;
    };
    window: {
        isExistent: boolean;
        amount: number;
    };
}

interface IBathroom {
    isBathAvailable: boolean;
    isBidetAvailable: boolean;
    isShowerAvailable: boolean;
    isToiletAvaialable: boolean;
    internal: IInternalConstruction;
}

interface IBedroom {
    internal: IInternalConstruction;
}

interface IHall {
    internal: IInternalConstruction;
}

interface IKitchen {
    internal: IInternalConstruction;
}

interface ILaundry {
    internal: IInternalConstruction;
}

interface ILivingRoom {
    internal: IInternalConstruction;
}

interface ILayout {
    floor: number;
    roomsAmount: number;
    separateToiletsAmount: number;
    storiesAmount: number;
    bathrooms: IBathroom[];
    bedrooms: IBedroom[];
    halls: IHall[];
    kitchens: IKitchen[];
    laundries: ILaundry[];
    livingRooms: ILivingRoom[];
}

interface IConstruction {
    yearOfConstruction: number;
    buildingType: string;
    energyLabel: EnergyLabel;
    kindOfHouse: KindOfHouse;
    external: IExternalConstruction;
    layout: ILayout;
}

/* LOCATION */

interface ILocation {
    streetName: string;
    streetNumber: number;
    addition: string;
    postcode: string;
    city: string;
    province: string;
    country: string;
    coordinates: {
        latitude: string;
        longtitude: string;
    };
    plusCode: string;
}

/* CADASTRAL DATA */

interface ICadastralData {
    cadastralMap: string;
}

/* ATTRIBUTES */

interface IAttributes {
    construction: IConstruction;
    location: ILocation;
    cadastralData: ICadastralData;
}

/* METADATA */

export interface IMetadata {
    name: string;
    id: number;
    description: string;
    images: string[];
    metaverse: number;
    attributes: IAttributes;
}
