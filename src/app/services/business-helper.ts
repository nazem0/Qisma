export class BusinessHelper {
  public static propertyTypes = [
    {
      id: 1,
      name: "Residential",
    },
    {
      id: 2,
      name: "Commercial",
    }
  ]

  public static propertyStatuses = [
    {
      id: 1,
      name: "Under Construction",
    },
    {
      id: 2,
      name: "Ready To Move And Rent",
    },
    {
      id:3,
      name:"Rented"
    }
  ]

  public static getPropertyStatusName(id:number) : string |  undefined {
    return this.propertyStatuses.find(e=>e.id == id)?.name
  }
  
}