import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { ComponentService } from './component.service';
import { ComponentForTestComponent } from './component-for-test.component';

describe('StorageLocationsLayoutComponent', (): void => {
  let component: ComponentForTestComponent;
  let fixture: ComponentFixture<ComponentForTestComponent>;
  let service: jasmine.SpyObj<ComponentService>;

  beforeEach((): void => {
    service = jasmine.createSpyObj(ComponentService, ['get', 'create']);
    TestBed.configureTestingModule({
      declarations: [ComponentForTestComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [],
      imports: [CommonModule],
    }).compileComponents();

    /// переопределениие внутрених провайдов
    TestBed.overrideComponent(ComponentForTestComponent, {
      add: {
        providers: [
          {
            provide: ComponentService,
            useValue: service,
          },
        ],
      },
    });

    fixture = TestBed.createComponent(ComponentForTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Компонент должен быть создан', () => {
    expect(component).toBeDefined();
  });

  it('Должен срабатывать метода после создания компонента', () => {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(service.get).toHaveBeenCalled();
  });

  it('должен создваться компонент по вызову метода созданния', () => {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(service.create).toHaveBeenCalled();
  });
});
