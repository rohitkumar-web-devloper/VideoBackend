import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

// Define the attributes for the Ads model
interface AdsAttributes {
  id: number
  category: string
  categoryId: number
  city: string
  district: string
  address: string
  zip: string
  age: string
  title: string
  description: string
  mobileNumber: string
  whatsAppNumber: string
  ethnicity: string
  nationality: string
  breast: string
  hair: string
  bodyType: string
  pricePerHour: string
  services: string[]
  attentionTo: string[]
  profile: string[]
  placeOfService: string[]
  paymentMethod: string[]

}

// Optional fields for model creation
type AdsCreationAttributes = Optional<AdsAttributes, 'id'>;

// Define the Ads model class
class Ads extends Model<AdsAttributes, AdsCreationAttributes> implements AdsAttributes {
  public id!: number;
  public category!: string;
  public categoryId!: number;
  public city!: string;
  public district!: string;
  public address!: string;
  public zip!: string;
  public age!: string;
  public title!: string;
  public description!: string;
  public mobileNumber!: string;
  public whatsAppNumber!: string;
  public ethnicity!: string;
  public nationality!: string;
  public breast!: string;
  public hair!: string;
  public bodyType!: string;
  public pricePerHour!: string;
  public services!: string[];
  public attentionTo!: string[];
  public profile!: string[];
  public placeOfService!: string[];
  public paymentMethod!: string[];

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Associations
  static associate(models: any) {
    // Define associations here, e.g.,
    // Ads.belongsTo(models.SomeModel);
  }

  static initModel(sequelize: Sequelize): typeof Ads {
    Ads.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        category: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        categoryId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        city: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        district: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        address: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        zip: {
          type: DataTypes.STRING,
          allowNull: false
        },
        age: {
          type: DataTypes.STRING
        },
        title: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        description: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        mobileNumber: {
          type: DataTypes.STRING,
          allowNull: false
        },
        whatsAppNumber: {
          type: DataTypes.STRING,
          allowNull: false
        },
        ethnicity: {
          type: DataTypes.STRING,
          allowNull: false
        },
        nationality: {
          type: DataTypes.STRING,
          allowNull: false
        },
        breast: {
          type: DataTypes.STRING,
          allowNull: false
        },
        hair: {
          type: DataTypes.STRING,
          allowNull: false
        },
        bodyType: {
          type: DataTypes.STRING,
          allowNull: false
        },
        pricePerHour: {
          type: DataTypes.STRING
        },
        services: {
          type: DataTypes.JSON,
          allowNull: false,
        },
        attentionTo: {
          type: DataTypes.JSON,
          allowNull: false,
        },
        profile: {
          type: DataTypes.JSON,
          allowNull: false,
        },
        placeOfService: {
          type: DataTypes.JSON,
          allowNull: false,
        },
        paymentMethod: {
          type: DataTypes.JSON,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'Ads',
        tableName: 'ads', // Optional: specify the table name if it differs
        timestamps: true, // Enable createdAt and updatedAt
      }
    );
    return Ads;
  }
}

export default Ads;
