import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilHerramientasEscaleras extends BasePage {

    readonly HERRAMIENTAS_ESCALERAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.HERRAMIENTAS_ESCALERAS = this.page.locator('//a [@id="menu-item-category-herramientas-escaleras"]')
    }

    async clickBazarTextilHerramientasEscaleras(): Promise<void> {
        await this.click(this.HERRAMIENTAS_ESCALERAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilHerramientasEscaleras(): Promise<void> {
        await this.clickBazarTextilHerramientasEscaleras()
    }
}
