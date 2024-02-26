import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburMascotasAccesoriosMascotas extends BasePage {

    readonly ACCESORIOS_MASCOTAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ACCESORIOS_MASCOTAS = this.page.locator('//a [@id="menu-item-category-higiene-accesorios-perros"]')
    }

    async clickAccesoriosMascotas(): Promise<void> {
        await this.click(this.ACCESORIOS_MASCOTAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburMascotasAccesoriosMascotas(): Promise<void> {
        await this.clickAccesoriosMascotas()
    }
}
