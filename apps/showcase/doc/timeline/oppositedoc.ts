import { Code } from '@/domain/code';
import { Component } from '@angular/core';

interface EventItem {
    status?: string;
    date?: string;
    icon?: string;
    color?: string;
    image?: string;
}

@Component({
    selector: 'opposite-doc',
    standalone: false,
    template: `
        <app-docsectiontext>
            <p>Additional content at the other side of the line can be provided with the <i>opposite</i> property.</p>
        </app-docsectiontext>
        <div class="card">
            <p-timeline [value]="events">
                <ng-template #opposite let-event>
                    <small class="text-surface-500 dark:text-surface-400">{{ event.date }}</small>
                </ng-template>
                <ng-template #content let-event>
                    {{ event.status }}
                </ng-template>
            </p-timeline>
        </div>
        <app-code [code]="code" selector="timeline-opposite-demo"></app-code>
    `
})
export class OppositeDoc {
    events: EventItem[];

    constructor() {
        this.events = [
            { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
            { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
            { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
            { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
        ];
    }

    code: Code = {
        basic: `<p-timeline [value]="events">
    <ng-template #opposite let-event>
        <small class="text-surface-500 dark:text-surface-400">{{ event.date }}</small>
    </ng-template>
    <ng-template #content let-event>
        {{ event.status }}
    </ng-template>
</p-timeline>`,

        html: `<div class="card">
    <p-timeline [value]="events">
         <ng-template #opposite let-event>
            <small class="text-surface-500 dark:text-surface-400">{{ event.date }}</small>
        </ng-template>
        <ng-template #content let-event>
            {{ event.status }}
        </ng-template>
    </p-timeline>
</div>`,

        typescript: `import { Component } from '@angular/core';
import { Timeline } from 'primeng/timeline';

interface EventItem {
    status?: string;
    date?: string;
    icon?: string;
    color?: string;
    image?: string;
}

@Component({
    selector: 'timeline-opposite-demo',
    templateUrl: './timeline-opposite-demo.html',
    standalone: true,
    imports: [Timeline]
})
export class TimelineOppositeDemo {
    events: EventItem[];

    constructor() {
        this.events = [
            { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
            { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
            { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
            { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
        ];
    }
}`
    };
}
