import { Code } from '@/domain/code';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'template-doc',
    standalone: false,
    template: `
        <app-docsectiontext>
            <p>Scroller content is customizable by using <i>ng-template</i>. Valid values are <i>content</i>, <i>item</i>, <i>loader</i> and <i>loadericon</i></p>
        </app-docsectiontext>
        <div class="card flex justify-center">
            <p-virtualscroller [items]="items" [itemSize]="25 * 7" [showLoader]="true" [delay]="250" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
                <ng-template #item let-item let-options="options">
                    <div class="flex flex-col align-items-strech" [ngClass]="{ 'surface-ground': options.odd }">
                        <div class="flex items-center px-2" style="height: 25px">Item: {{ item }}</div>
                        <div class="flex items-center px-2" style="height: 25px">Index: {{ options.index }}</div>
                        <div class="flex items-center px-2" style="height: 25px">Count: {{ options.count }}</div>
                        <div class="flex items-center px-2" style="height: 25px">First: {{ options.first }}</div>
                        <div class="flex items-center px-2" style="height: 25px">Last: {{ options.last }}</div>
                        <div class="flex items-center px-2" style="height: 25px">Even: {{ options.even }}</div>
                        <div class="flex items-center px-2" style="height: 25px">Odd: {{ options.odd }}</div>
                    </div>
                </ng-template>
                <ng-template #loader let-options="options">
                    <div class="flex flex-col items-stretch" [ngClass]="{ 'surface-ground': options.odd }">
                        <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="60%" height="1.2rem"></p-skeleton></div>
                        <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="50%" height="1.2rem"></p-skeleton></div>
                        <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="60%" height="1.2rem"></p-skeleton></div>
                        <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="50%" height="1.2rem"></p-skeleton></div>
                        <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="60%" height="1.2rem"></p-skeleton></div>
                        <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="50%" height="1.2rem"></p-skeleton></div>
                        <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="60%" height="1.2rem"></p-skeleton></div>
                    </div>
                </ng-template>
            </p-virtualscroller>
        </div>
        <app-code [code]="code" selector="scroller-template-demo"></app-code>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateDoc {
    items!: string[];

    ngOnInit() {
        this.items = Array.from({ length: 1000 }).map((_, i) => `Item #${i}`);
    }

    code: Code = {
        basic: `<p-virtualscroller [items]="items" [itemSize]="25 * 7" [showLoader]="true" [delay]="250" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
    <ng-template #item let-item let-options="options">
        <div class="flex flex-col align-items-strech" [ngClass]="{ 'surface-ground': options.odd }">
            <div class="flex items-center px-2" style="height: 25px">Item: {{ item }}</div>
            <div class="flex items-center px-2" style="height: 25px">Index: {{ options.index }}</div>
            <div class="flex items-center px-2" style="height: 25px">Count: {{ options.count }}</div>
            <div class="flex items-center px-2" style="height: 25px">First: {{ options.first }}</div>
            <div class="flex items-center px-2" style="height: 25px">Last: {{ options.last }}</div>
            <div class="flex items-center px-2" style="height: 25px">Even: {{ options.even }}</div>
            <div class="flex items-center px-2" style="height: 25px">Odd: {{ options.odd }}</div>
        </div>
    </ng-template>
    <ng-template #loader let-options="options">
        <div class="flex flex-col items-stretch" [ngClass]="{ 'surface-ground': options.odd }">
            <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="60%" height="1.2rem"></p-skeleton></div>
            <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="50%" height="1.2rem"></p-skeleton></div>
            <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="60%" height="1.2rem"></p-skeleton></div>
            <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="50%" height="1.2rem"></p-skeleton></div>
            <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="60%" height="1.2rem"></p-skeleton></div>
            <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="50%" height="1.2rem"></p-skeleton></div>
            <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="60%" height="1.2rem"></p-skeleton></div>
        </div>
    </ng-template>
</p-virtualscroller>`,
        html: `<div class="card flex justify-center">
   <p-virtualscroller [items]="items" [itemSize]="25 * 7" [showLoader]="true" [delay]="250" styleClass="border border-surface" [style]="{ width: '200px', height: '200px' }">
        <ng-template #item let-item let-options="options">
            <div class="flex flex-col align-items-strech" [ngClass]="{ 'surface-ground': options.odd }">
                <div class="flex items-center px-2" style="height: 25px">Item: {{ item }}</div>
                <div class="flex items-center px-2" style="height: 25px">Index: {{ options.index }}</div>
                <div class="flex items-center px-2" style="height: 25px">Count: {{ options.count }}</div>
                <div class="flex items-center px-2" style="height: 25px">First: {{ options.first }}</div>
                <div class="flex items-center px-2" style="height: 25px">Last: {{ options.last }}</div>
                <div class="flex items-center px-2" style="height: 25px">Even: {{ options.even }}</div>
                <div class="flex items-center px-2" style="height: 25px">Odd: {{ options.odd }}</div>
            </div>
        </ng-template>
        <ng-template #loader let-options="options">
            <div class="flex flex-col items-stretch" [ngClass]="{ 'surface-ground': options.odd }">
                <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="60%" height="1.2rem"></p-skeleton></div>
                <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="50%" height="1.2rem"></p-skeleton></div>
                <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="60%" height="1.2rem"></p-skeleton></div>
                <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="50%" height="1.2rem"></p-skeleton></div>
                <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="60%" height="1.2rem"></p-skeleton></div>
                <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="50%" height="1.2rem"></p-skeleton></div>
                <div class="flex items-center px-2" style="height: 25px"><p-skeleton width="60%" height="1.2rem"></p-skeleton></div>
            </div>
        </ng-template>
    </p-virtualscroller>
</div>`,

        typescript: `import { Component, OnInit } from '@angular/core';
import { Scroller } from 'primeng/scroller';
import { Skeleton } from 'primeng/skeleton';

@Component({
    selector: 'scroller-template-demo',
    templateUrl: './scroller-template-demo.html',
    styles: [
        \`:host ::ng-deep {
            .p-scroller-viewport {
                flex: none;
            }

            p-skeleton {
                width: 100%;
            }
        }\`
    ],
    standalone: true,
    imports: [Scroller, Skeleton]
})
export class ScrollerTemplateDemo implements OnInit {
    items!: string[];

    ngOnInit() {
        this.items = Array.from({ length: 1000 }).map((_, i) => \`Item #\${i}\`);
    }
}`,
        scss: `
:host ::ng-deep {
    .p-scroller-viewport {
        flex: none;
    }

    p-skeleton {
        width: 100%;
    }
}`
    };
}
