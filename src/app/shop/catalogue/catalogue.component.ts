import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { CartService } from '../../../shared/services/cart.service';
@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [
    CommonModule,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent {
  imageSet: { imagePath: string; name: string; price: number }[] = [];
  selectedIndex!: number;

  ficusImages = [
    { imagePath: 'assets/FICUS/FICUS 1.jpg', name: 'Ficus Elastica Tineke Rubber Plant', price: 200 },
    { imagePath: 'assets/FICUS/FICUS2.jpg', name: 'Phulwa Ficus Bonsai', price: 400 },
    { imagePath: 'assets/FICUS/FICUS3.jpg', name: 'Ficus Elastica Burgundy', price: 200 },
    { imagePath: 'assets/FICUS/FICUS4.jpg', name: 'Rubber Ficus Elastica Shivereana', price: 100 },
    { imagePath: 'assets/FICUS/FICUS5.jpg', name: 'Ficus Elastica Green Rubber', price: 100 },
    { imagePath: 'assets/FICUS/FICUS 6.jpg', name: 'Rubber Ficus Elastica Variegated', price: 100 },
    { imagePath: 'assets/FICUS/FICUS 7.jpg', name: 'Rubber Ficus Elastica Variegated', price: 150 },
    { imagePath: 'assets/FICUS/FICUS8.jpg', name: 'Ficus benghalensis', price: 100 },
    { imagePath: 'assets/FICUS/FICUS 9.jpg', name: 'Ficus Bonsai', price: 600 },
  ];

  aglonimaImages = [
    { imagePath: 'assets/AGLONIMA/1.jpg', name: 'Pink Dalmatian', price: 450 },
    { imagePath: 'assets/AGLONIMA/2.jpg', name: 'Aglaonema Red Vien', price: 250 },
    { imagePath: 'assets/AGLONIMA/3.jpg', name: 'Green Happiness', price: 250 },
    { imagePath: 'assets/AGLONIMA/4.jpg', name: 'Khanza Pink', price: 500 },
    { imagePath: 'assets/AGLONIMA/5.jpg', name: 'Pink Valentine', price: 170 },
    { imagePath: 'assets/AGLONIMA/6.jpg', name: 'Golden Power', price: 250 },
    { imagePath: 'assets/AGLONIMA/7.jpg', name: 'Star Dust', price: 300 },
    { imagePath: 'assets/AGLONIMA/8.jpg', name: 'Rui', price: 170 },
    { imagePath: 'assets/AGLONIMA/9.jpg', name: 'Snow White', price: 200 },
    { imagePath: 'assets/AGLONIMA/10.jpg', name: 'Beauty', price: 170 },
    { imagePath: 'assets/AGLONIMA/11.jpg', name: 'Lipstick Green', price: 170 },
    { imagePath: 'assets/AGLONIMA/12.jpg', name: 'Aurora Orange', price: 200 },
    { imagePath: 'assets/AGLONIMA/13.jpg', name: 'Angel', price: 170 },
    { imagePath: 'assets/AGLONIMA/14.jpg', name: 'Super White', price: 170 },
    { imagePath: 'assets/AGLONIMA/15.jpg', name: 'Pink Aurora', price: 170 },
    { imagePath: 'assets/AGLONIMA/16.jpg', name: 'Thailand Red', price: 250 },
    { imagePath: 'assets/AGLONIMA/17.jpg', name: 'China Red', price: 250 },
    { imagePath: 'assets/AGLONIMA/18.jpg', name: 'Siam Aurora', price: 170 },
    { imagePath: 'assets/AGLONIMA/19.jpg', name: 'Diamond Red', price: 170 },
    { imagePath: 'assets/AGLONIMA/20.jpg', name: 'White Anjuman', price: 200 },
    { imagePath: 'assets/AGLONIMA/21.jpg', name: 'Pictum Tricolour', price: 600 },
  ];

  alocasiaImages = [
    { imagePath: 'assets/ALOCASIA/1.jpg', name: 'ALOCASIA WATANSONIA', price: 200 },
    { imagePath: 'assets/ALOCASIA/2.jpg', name: 'PINK DRAGON', price: 200 },
    { imagePath: 'assets/ALOCASIA/3.jpg', name: 'PARASOL', price: 200 },
    { imagePath: 'assets/ALOCASIA/4.jpg', name: 'AZLAANI', price: 250 },
    { imagePath: 'assets/ALOCASIA/5.jpg', name: 'DRAGON SCALE', price: 200 },
    { imagePath: 'assets/ALOCASIA/6.jpg', name: 'SILVER DRAGON', price: 200 },
    { imagePath: 'assets/ALOCASIA/7.jpg', name: 'CUPREA', price: 300 },
    { imagePath: 'assets/ALOCASIA/8.jpg', name: 'ZEBRINA', price: 400 },
    { imagePath: 'assets/ALOCASIA/9.jpg', name: 'CUCULATA VERIGATED', price: 250 },
    { imagePath: 'assets/ALOCASIA/10.jpg', name: 'BAMBINO', price: 160 },
    { imagePath: 'assets/ALOCASIA/11 - Copy.jpg', name: 'MELO', price: 250 },
  ];

  pepromiaImages = [
    { imagePath: 'assets/PEPROMIA/1.jpg', name: 'Peperomia Angulata', price: 100 },
    { imagePath: 'assets/PEPROMIA/2.jpg', name: 'Peperomia Clusiifolia Tricolour', price: 80 },
    { imagePath: 'assets/PEPROMIA/3.jpg', name: 'Peperomia Obtusifolia Variegated', price: 80 },
    { imagePath: 'assets/PEPROMIA/4.jpg', name: 'Pepromia Caperata', price: 80 },
    { imagePath: 'assets/PEPROMIA/5.jpg', name: 'Peperomia Lemon Lime', price: 150 },
    { imagePath: 'assets/PEPROMIA/6.jpg', name: 'Peperomia Brasilia', price: 200 },
    { imagePath: 'assets/PEPROMIA/7.jpg', name: 'Peperomia Red Luna', price: 200 },
    { imagePath: 'assets/PEPROMIA/8.jpg', name: 'Peperomia Tanaman', price: 150 },
    { imagePath: 'assets/PEPROMIA/9.jpg', name: 'Peperomia Verschasfeltii', price: 200 },
    { imagePath: 'assets/PEPROMIA/10.jpg', name: 'Peperomia Golden Gate', price: 200 },
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private messageService:MessageService,
    private cartService:CartService
  ) {}

  ngOnInit() {
    let categoryName = this.activatedRoute.snapshot.params['id'];
    this.setImageToDisplay(categoryName);
  }
  showSuccess(message:string) {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: message });
}

  setImageToDisplay(category: string) {
    switch (category) {
      case 'ficus':
        this.imageSet = this.ficusImages;
        break;
      case 'aglonima':
        this.imageSet = this.aglonimaImages;
        break;
      case 'pepromia':
        this.imageSet = this.pepromiaImages;
        break;
      case 'alocasia':
        this.imageSet = this.alocasiaImages;
        break;
    }
  }

  setIndex(i: number) {
    this.selectedIndex = i;
  }

  addToCart(ficus: { imagePath: string; name: string; price: number }, index: number): void {
    console.log('Added to cart:', ficus, 'at index', index);
    this.showSuccess(`${ficus.name}Added to cart`);
    this.cartService.appendToCart(ficus)
  //  this.showSnackBar('Added to cart successfully');
  }

  buyNow(ficus: { imagePath: string; name: string; price: number }, index: number): void {
    console.log('Buy now:', ficus, 'at index', index);
    this.router.navigate(['/cart']);
  }
saveItemsToLocalStorage(item:any){
  let items=localStorage.getItem('item')
localStorage.setItem('item',item)
}
  // showSnackBar(message: string): void {
  //   this.snackBar.open(message, 'Close', {
  //     duration: 300
  //   })
  // }
}