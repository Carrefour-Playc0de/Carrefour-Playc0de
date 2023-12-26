import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilCubiertosUtensilios extends BasePage {

    readonly CUBIERTOS_UTENSILIOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CUBIERTOS_UTENSILIOS = this.page.locator('//a [@id="menu-item-category-cubiertos-utensillos"]')
    }

    async clickBazarTextilCubiertosUtensilios(): Promise<void> {
        await this.click(this.CUBIERTOS_UTENSILIOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilCubiertosUtensilios(): Promise<void> {
        await this.clickBazarTextilCubiertosUtensilios()
    }
}
