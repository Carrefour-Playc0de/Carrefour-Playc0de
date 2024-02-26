import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburMascotasHigieneMascotas extends BasePage {

    readonly HIGIENE_MASCOTAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.HIGIENE_MASCOTAS = this.page.locator('//a [@id="menu-item-category-higiene-accesorios-gatos" ]')
    }

    async clickHigieneMascotas(): Promise<void> {
        await this.click(this.HIGIENE_MASCOTAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburMascotasHigieneMascotas(): Promise<void> {
        await this.clickHigieneMascotas()
    }
}
