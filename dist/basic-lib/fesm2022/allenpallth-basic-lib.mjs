import * as i0 from '@angular/core';
import { Injectable, Component, Input, EventEmitter, ChangeDetectionStrategy, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';

class BasicLibService {
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: BasicLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: BasicLibService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: BasicLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class BasicLibComponent {
    value = 'value';
    constructor() {
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: BasicLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.4", type: BasicLibComponent, isStandalone: true, selector: "lib-basic-lib", inputs: { value: "value" }, ngImport: i0, template: `

  `, isInline: true, styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: BasicLibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-basic-lib', standalone: true, imports: [CommonModule], template: `

  ` }]
        }], ctorParameters: () => [], propDecorators: { value: [{
                type: Input
            }] } });

class ElementsComponent {
    item;
    formType = 1;
    itemToDel = new EventEmitter();
    removeItem(item) {
        this.itemToDel.emit(item);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: ElementsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.4", type: ElementsComponent, isStandalone: true, selector: "lib-elements", inputs: { item: "item", formType: "formType" }, outputs: { itemToDel: "itemToDel" }, ngImport: i0, template: `
    @if(item.id == 1){
    <p>{{ item.name }}</p>
    }@else if (item.id == 2) {
    <input [placeholder]="item.name" />
    }@else if (item.id == 3) {
    <h1>{{ item.name }}</h1>
    }
    <!-- @if(formType === 2){
      <span><button (click)="removeItem(item)">remove</button></span>
    } -->
  `, isInline: true, styles: [":host{display:block}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: ElementsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-elements', imports: [], template: `
    @if(item.id == 1){
    <p>{{ item.name }}</p>
    }@else if (item.id == 2) {
    <input [placeholder]="item.name" />
    }@else if (item.id == 3) {
    <h1>{{ item.name }}</h1>
    }
    <!-- @if(formType === 2){
      <span><button (click)="removeItem(item)">remove</button></span>
    } -->
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [":host{display:block}\n"] }]
        }], propDecorators: { item: [{
                type: Input
            }], formType: [{
                type: Input
            }], itemToDel: [{
                type: Output
            }] } });

class TestComponentComponent {
    formtype = 0;
    constructor() { }
    ngOnChanges(changes) {
        console.log(changes);
    }
    onChange() {
        console.log(this.formtype);
    }
    elementList = [
        { name: 'Title Element', id: 1 },
        { name: 'Input Element', id: 2 },
    ];
    formList = [{ name: 'Heading Element', id: 3 }];
    drop(event) {
        if (event.previousContainer === event.container) {
            // Allow reordering within `doneList`
            const [movedItem] = event.container.data.splice(event.previousIndex, 1);
            event.container.data.splice(event.currentIndex, 0, movedItem);
        }
        else {
            // Clone item when dragged from `todoList` to `doneList`
            const clonedItem = JSON.parse(JSON.stringify(event.previousContainer.data[event.previousIndex]));
            event.container.data.splice(event.currentIndex, 0, clonedItem);
        }
    }
    // Prevent dropping items back into `todoList`
    preventDrop = (drag, drop) => drop.id !== 'todoList';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: TestComponentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.4", type: TestComponentComponent, isStandalone: true, selector: "lib-test-component", inputs: { formtype: "formtype" }, usesOnChanges: true, ngImport: i0, template: "@if(formtype == 1){\n<div class=\"container\">\n  <div class=\"example-container column\">\n    <h2>Elements List</h2>\n\n    <div\n      cdkDropList\n      #todoList=\"cdkDropList\"\n      [cdkDropListData]=\"elementList\"\n      [cdkDropListConnectedTo]=\"[doneList]\"\n      class=\"example-list\"\n      (cdkDropListDropped)=\"drop($event)\"\n    >\n      @for (item of elementList; track item) {\n      <div class=\"example-box\" cdkDrag>\n        <lib-elements [item]=\"item\"></lib-elements>\n      </div>\n      }\n    </div>\n  </div>\n\n  <div class=\"example-container column\">\n    <h2>Form</h2>\n    <div\n      cdkDropList\n      #doneList=\"cdkDropList\"\n      [cdkDropListData]=\"formList\"\n      [cdkDropListConnectedTo]=\"[todoList]\"\n      class=\"example-list\"\n      (cdkDropListDropped)=\"drop($event)\"\n    >\n      @for (item of formList; track item) {\n      <div class=\"example-box\" cdkDrag>\n        <lib-elements [item]=\"item\"></lib-elements>\n      </div>\n      }\n    </div>\n  </div>\n</div>\n} @else if(formtype == 2){\n<div class=\"edit-container column\">\n  <h2>Display Mode</h2>\n  <div>\n    @for (item of formList; track item) {\n    <div class=\"display-form\">\n      <lib-elements\n        [item]=\"item\"\n        [formType]=\"2\"\n        (itemToDel)=\"drop($event)\"\n      ></lib-elements>\n    </div>\n    }\n  </div>\n</div>\n\n} @else if(formtype == 3){\n<div class=\"edit-container column\">\n  <h2>Preview</h2>\n  <div>\n    @for (item of formList; track item) {\n    <div class=\"preview-form\">\n      <lib-elements [item]=\"item\" [formType]=\"3\"></lib-elements>\n    </div>\n    }\n  </div>\n</div>\n}\n", styles: [".container{display:flex;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px}.column{background-color:#add8e6;padding:20px;text-align:center;border:1px solid #ccc}.example-container{width:400px;max-width:100%;margin:0 25px 25px 0;display:inline-block;vertical-align:top}.example-list{border:solid 1px #ccc;min-height:60px;background:#fff;border-radius:4px;overflow:hidden;display:block}.example-box{padding:20px 10px;border-bottom:solid 1px #ccc;color:#000000de;display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;cursor:move;background:#fff;font-size:14px}.edit-container{width:400px;margin:0 25px 25px 0;vertical-align:top}.preview-form{padding:20px 10px;border-bottom:solid 1px #ccc;color:#000000de;display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;background:#fff;font-size:14px;cursor:not-allowed}.display-form{padding:20px 10px;border-bottom:solid 1px #ccc;color:#000000de;display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;background:#fff;font-size:14px}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-box:last-child{border:none}.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: CdkDropList, selector: "[cdkDropList], cdk-drop-list", inputs: ["cdkDropListConnectedTo", "cdkDropListData", "cdkDropListOrientation", "id", "cdkDropListLockAxis", "cdkDropListDisabled", "cdkDropListSortingDisabled", "cdkDropListEnterPredicate", "cdkDropListSortPredicate", "cdkDropListAutoScrollDisabled", "cdkDropListAutoScrollStep", "cdkDropListElementContainer"], outputs: ["cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited", "cdkDropListSorted"], exportAs: ["cdkDropList"] }, { kind: "directive", type: CdkDrag, selector: "[cdkDrag]", inputs: ["cdkDragData", "cdkDragLockAxis", "cdkDragRootElement", "cdkDragBoundary", "cdkDragStartDelay", "cdkDragFreeDragPosition", "cdkDragDisabled", "cdkDragConstrainPosition", "cdkDragPreviewClass", "cdkDragPreviewContainer", "cdkDragScale"], outputs: ["cdkDragStarted", "cdkDragReleased", "cdkDragEnded", "cdkDragEntered", "cdkDragExited", "cdkDragDropped", "cdkDragMoved"], exportAs: ["cdkDrag"] }, { kind: "component", type: ElementsComponent, selector: "lib-elements", inputs: ["item", "formType"], outputs: ["itemToDel"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.4", ngImport: i0, type: TestComponentComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-test-component', imports: [
                        CommonModule,
                        FormsModule,
                        CdkDropList,
                        CdkDrag,
                        BasicLibComponent,
                        ElementsComponent,
                    ], template: "@if(formtype == 1){\n<div class=\"container\">\n  <div class=\"example-container column\">\n    <h2>Elements List</h2>\n\n    <div\n      cdkDropList\n      #todoList=\"cdkDropList\"\n      [cdkDropListData]=\"elementList\"\n      [cdkDropListConnectedTo]=\"[doneList]\"\n      class=\"example-list\"\n      (cdkDropListDropped)=\"drop($event)\"\n    >\n      @for (item of elementList; track item) {\n      <div class=\"example-box\" cdkDrag>\n        <lib-elements [item]=\"item\"></lib-elements>\n      </div>\n      }\n    </div>\n  </div>\n\n  <div class=\"example-container column\">\n    <h2>Form</h2>\n    <div\n      cdkDropList\n      #doneList=\"cdkDropList\"\n      [cdkDropListData]=\"formList\"\n      [cdkDropListConnectedTo]=\"[todoList]\"\n      class=\"example-list\"\n      (cdkDropListDropped)=\"drop($event)\"\n    >\n      @for (item of formList; track item) {\n      <div class=\"example-box\" cdkDrag>\n        <lib-elements [item]=\"item\"></lib-elements>\n      </div>\n      }\n    </div>\n  </div>\n</div>\n} @else if(formtype == 2){\n<div class=\"edit-container column\">\n  <h2>Display Mode</h2>\n  <div>\n    @for (item of formList; track item) {\n    <div class=\"display-form\">\n      <lib-elements\n        [item]=\"item\"\n        [formType]=\"2\"\n        (itemToDel)=\"drop($event)\"\n      ></lib-elements>\n    </div>\n    }\n  </div>\n</div>\n\n} @else if(formtype == 3){\n<div class=\"edit-container column\">\n  <h2>Preview</h2>\n  <div>\n    @for (item of formList; track item) {\n    <div class=\"preview-form\">\n      <lib-elements [item]=\"item\" [formType]=\"3\"></lib-elements>\n    </div>\n    }\n  </div>\n</div>\n}\n", styles: [".container{display:flex;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px}.column{background-color:#add8e6;padding:20px;text-align:center;border:1px solid #ccc}.example-container{width:400px;max-width:100%;margin:0 25px 25px 0;display:inline-block;vertical-align:top}.example-list{border:solid 1px #ccc;min-height:60px;background:#fff;border-radius:4px;overflow:hidden;display:block}.example-box{padding:20px 10px;border-bottom:solid 1px #ccc;color:#000000de;display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;cursor:move;background:#fff;font-size:14px}.edit-container{width:400px;margin:0 25px 25px 0;vertical-align:top}.preview-form{padding:20px 10px;border-bottom:solid 1px #ccc;color:#000000de;display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;background:#fff;font-size:14px;cursor:not-allowed}.display-form{padding:20px 10px;border-bottom:solid 1px #ccc;color:#000000de;display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;background:#fff;font-size:14px}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-box:last-child{border:none}.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { formtype: [{
                type: Input
            }] } });

/*
 * Public API Surface of basic-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BasicLibComponent, BasicLibService, TestComponentComponent };
//# sourceMappingURL=allenpallth-basic-lib.mjs.map
