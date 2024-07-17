import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  addTocartList:any[]=[
   {
      imagePath: '',
      name: '',
      price: 0,
  }
]
  constructor() { }

  setTaskList(){
    localStorage.setItem("taskList", JSON.stringify(this.addTocartList) )
  }
  appendToCart(task:any){
    console.log(task);
    
   this.addTocartList.push(task);
   this.setTaskList();
  
  }
  deletTask(taskId:string){

   this.removeTaskById(taskId)
   this.setTaskList()
  }
 
  removeTaskById(id: string): void {
    const index = this.addTocartList.findIndex(task => task.id === id);
        if (index !== -1) {
      this.addTocartList.splice(index, 1);
    }
  }
  updatetaskStatus(taskId:string){
this.addTocartList.filter((task) =>{
 if(task.id === taskId) 
  task.status=!task.status;   
});
this.setTaskList()
  }
  
}
