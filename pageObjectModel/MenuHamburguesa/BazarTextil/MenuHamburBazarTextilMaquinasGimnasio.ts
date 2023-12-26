import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilMaquinasGimnasio extends BasePage {

    readonly MAQUINAS_GIMNASIO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.MAQUINAS_GIMNASIO = this.page.locator('//a [@id="menu-item-category-maquinas-gimnasio"]')
    }

    async clickBazarTextilMaquinasGimnasio(): Promise<void> {
        await this.click(this.MAQUINAS_GIMNASIO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilMaquinasGimnasio(): Promise<void> {
        await this.clickBazarTextilMaquinasGimnasio()
    }
}
